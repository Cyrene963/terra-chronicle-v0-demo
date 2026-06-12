#!/usr/bin/env bash
# Usage: gen_image.sh <outfile.png> <size> <prompt>
set -u
OUT="$1"; SIZE="$2"; PROMPT="$3"
KEY="20090603_WeHaveToBeinHKU"
API="https://ai.input.im/v1/images/generations"

try_size() {
  local size="$1"
  curl -sS -m 600 "$API" \
    -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
    -d "$(python3 -c "import json,sys;print(json.dumps({'model':'gpt-image-2','prompt':sys.argv[1],'size':sys.argv[2],'n':1}))" "$PROMPT" "$size")" \
    -o "$OUT.json"
  python3 - "$OUT" <<'EOF'
import json,base64,sys
out=sys.argv[1]
try:
    d=json.load(open(out+'.json'))
    b64=d['data'][0]['b64_json']
    open(out,'wb').write(base64.b64decode(b64))
    print('OK',out)
except Exception as e:
    print('FAIL',out,repr(e),open(out+'.json').read()[:300])
    sys.exit(1)
EOF
}

try_size "$SIZE" || try_size "1536x1024" || try_size "1024x1024"
rm -f "$OUT.json"
