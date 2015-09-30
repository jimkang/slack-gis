slack-gis
==================

Searches Google Images for Slack.

<img width="943" alt="gis screenshot" src="https://cloud.githubusercontent.com/assets/324298/10197703/e0cb185e-6766-11e5-9467-1b8c188a7eb4.png">

Running it yourself on Linux or Mac (probably the same for Windows, but I haven't tried it)
-------------------------------------------------------------------------------------------

- Install [Node](https://nodejs.org).
- Run these commands to clone the repo and install its dependencies.

        git clone git@github.com:jimkang/slack-gis.git
        cd slack-gis
        npm install

- Over in Slack, add an [Outgoing Webhook](https://api.slack.com/outgoing-webhooks) that points to your server at the port specified by `webhookPort` in config.js. 

<img width="824" alt="Outgoing Webhook config" src="https://cloud.githubusercontent.com/assets/324298/10197978/f8f7679c-6767-11e5-92ac-a8908859eff3.png">

- Create a config.js file in the `slack-gis` with these contents:

    module.exports = {
      webhookPort: 7778,
      validWebhookTokens: [
        'your Slack webhook token'
      ]
    };

- Copy the generated token by the webhook page into the `validWebhookTokens` array in config.js.

Having me running it for you
----------------------------

If you want, I can try running GIS for your Slack. Just set up the webhook as described above and send me the token. I can't make guarantees about performance, however. (I think it should be fine, but my GIS webhook lives on a tiny VPS instance with 22 other bots and API servers.)

Usage
-----

    make start

This will start the server, and it will be ready to serve Google Image search results to Slack!

You can type `<your trigger word>` cats` in a channel, and an image search result will show up!

<img width="671" alt="gis screenshot of Smidgeo" src="https://cloud.githubusercontent.com/assets/324298/10197619/8bebe1b0-6766-11e5-98ef-fb08f3c3c63e.png">

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
