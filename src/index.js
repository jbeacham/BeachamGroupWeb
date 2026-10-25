// Redirect http:// and www. to the canonical https://beachamgroupllc.com, then serve public/.
const CANONICAL_HOST = "beachamgroupllc.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol !== "https:" || url.hostname !== CANONICAL_HOST) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
