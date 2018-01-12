import * as singleSpa from 'single-spa'

const loading1Function = () => import('./app1/app1.js')
const activity1Function = location => location.hash.startsWith('#/app1')

const loading2Function = () => import('./app2/app2.js')
const activity2Function = location => location.hash.startsWith('#/app2')

singleSpa.registerApplication('app1', loading1Function, activity1Function)
singleSpa.registerApplication('app2', loading2Function, activity2Function)

singleSpa.start()