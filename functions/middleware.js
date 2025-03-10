export async function onRequest(context) {
    const url = new URL(context.request.url);
    
    // If requesting a static asset that exists, serve it
    if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$/)) {
      // Continue to the next handler (which will try to serve the asset)
      return context.next();
    }
    
    // For HTML routes or anything else, serve index.html
    // This is the SPA fallback
    if (!url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$/)) {
      return context.env.ASSETS.fetch(`${url.origin}/index.html`);
    }
    
    return context.next();
  }