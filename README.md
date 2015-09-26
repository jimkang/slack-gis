slack-gis
==================

Searches Google Images for Slack.

Installation
------------

Running it yourself:

    git clone git@github.com:jimkang/slack-gis.git
    cd slack-gis
    npm install

Then, create a config.js file with these contents:

    module.exports = {
      webhookPort: 7778,
      validWebhookTokens: [
        'your Slack webhook token'
      ]
    };

Over in Slack, add an Outgoing Webhook that points to your server at the port specified by `webhookPort` in config.js. Copy the generated token by the webhook page into config.js.

Usage
-----

    make start

This will start the server, and it will be ready to serve Google Image search results to Slack!

You can type `<your trigger word>` cats` in a channel, and an image search result will show up!

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
