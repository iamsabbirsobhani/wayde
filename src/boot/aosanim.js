import { boot } from 'quasar/wrappers'

import AOS from 'aos'
import 'aos/dist/aos.css'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
    app.use(AOS.init());
})
