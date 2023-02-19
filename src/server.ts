import {KApp, ROLES} from '@kustomer/apps-server-sdk'

import pkg from '../package.json'

const kapp = new KApp({
  app: pkg.name,
  title: "KB Linker",
  visibility: 'private',
  version: pkg.version,
  url: import.meta.env,  
  clientId: import.meta.env.CLIENT_ID,  
  clientSecret: import.meta.env.CLIENT_SECRET,
  roles: ROLES.common,
  iconUrl: "",
  description: "Links your KB Articles to Conversations in the Conversation View.",
  appDetails:{
    appDeveloper: {
        name: 'Kustomer',
        website: 'https://kustomer.com',
        supportEmail: 'support@kustomer.com'
    },
    externalPlatform: {
        name: 'Some External Platform',
        website: 'https://external-platform.example.com'
      }
  }

});

kapp.useView('kb-linker-card', './index.html', {
    resource: 'conversation',
    context: 'smartbar-card',
    displayName: 'KB Linker Card',
    icon: 'example-icon',
    state: 'open'
  });

(async () => {
    try {
      await kapp.start({ port: +(process.env.PORT || 80) });
    } catch (err) {
      kapp.log.error(JSON.stringify(err, undefined, 2));
    }
  })();