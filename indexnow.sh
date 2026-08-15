#!/bin/sh
# Submit current sitemap URLs to IndexNow (Bing and others).
set -e
python3 - <<'PY'
import json, re, urllib.request
locs=[]
try:
    with urllib.request.urlopen("https://sudoshz.ir/sitemap.xml", timeout=30) as r:
        t=r.read().decode("utf-8","replace")
    locs=re.findall(r"<loc>(.*?)</loc>", t)
except Exception as e:
    print("could not read sitemap", e)
if not locs:
    locs=["https://sudoshz.ir/","https://sudoshz.ir/about/","https://sudoshz.ir/projects/","https://sudoshz.ir/contact/"]
payload={
  "host":"sudoshz.ir",
  "key":"0eab16b3181429aa0f359e9627cd9e4c",
  "keyLocation":"https://sudoshz.ir/0eab16b3181429aa0f359e9627cd9e4c.txt",
  "urlList":locs[:10000],
}
req=urllib.request.Request(
  "https://api.indexnow.org/indexnow",
  data=json.dumps(payload).encode("utf-8"),
  headers={"Content-Type":"application/json; charset=utf-8"},
  method="POST",
)
try:
    with urllib.request.urlopen(req, timeout=60) as r:
        print("IndexNow", r.status, "urls", len(locs))
except Exception as e:
    print("IndexNow failed", e)
PY
