System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      /**
       * Transport.
       * @type {string}
       */
      const TRANSPORT = 'transport';

      /**
       * Local transport constant. Use it for sending messages inside Rodin
       * @type {string}
       */

      _export('TRANSPORT', TRANSPORT);

      const LOCAL = 'local';

      /**
       * Post Message transport. Use it for sending messages over iframes
       * @type {string}
       */

      _export('LOCAL', LOCAL);

      const POST_MESSAGE = 'postmessage';

      _export('POST_MESSAGE', POST_MESSAGE);

      const HELLO_FROM_CHILD = 'hellofromchild';

      _export('HELLO_FROM_CHILD', HELLO_FROM_CHILD);

      const HELLO_FROM_PARENT = 'hellofromparent';

      _export('HELLO_FROM_PARENT', HELLO_FROM_PARENT);

      const ALL = 'all';

      _export('ALL', ALL);

      const CHILDREN = 'children';

      _export('CHILDREN', CHILDREN);

      const PARENT = 'parent';

      _export('PARENT', PARENT);
    }
  };
});