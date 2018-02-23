#!/bin/sh

echo '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>'
sed 's/^.*/<a href="&">&<\/a><br\/>/'
echo '</body></html>'

