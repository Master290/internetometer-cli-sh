export default {
  async fetch(request) {
    const rawUrl =
      "https://raw.githubusercontent.com/Master290/internetometer-cli-sh/main/internet.sh";

     const resp = await fetch(rawUrl, {
       cf: { cacheTtl: 300, cacheEverything: true },
     });

     if (!resp.ok) {
       return new Response("failed to load script", { status: 502 });
     }

     return new Response(resp.body, {
       headers: {
         "content-type": "text/plain; charset=utf-8",
         "cache-control": "public, max-age=300",
       },
     });
   },
};
