export async function onRequest(context) {
    const url = new URL(context.request.url);
    
    // If requesting a static asset, serve it directly
    if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot|json|xml|txt)$/)) {
      return context.next();
    }
    
    // If requesting an HTML file that exists, serve it directly
    // This ensures /faq.html, /blog/*.html etc. are not overridden
    if (url.pathname.match(/\.html$/)) {
      return context.next();
    }

    // For known sub-page routes without .html extension, serve the correct file
    if (url.pathname === '/faq') {
      return context.env.ASSETS.fetch(`${url.origin}/faq.html`);
    }
    if (url.pathname.startsWith('/blog')) {
      return context.next();
    }

    // For the root and unknown routes, serve index.html (SPA fallback)
    if (url.pathname === '/' || url.pathname === '') {
      return context.next();
    }

    // Fallback: try to serve the asset, if it doesn't exist Cloudflare Pages
    // will automatically show the 404 page
    return context.next();
  }