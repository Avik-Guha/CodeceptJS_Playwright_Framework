/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type bluescapeQAPage = typeof import('./pages/bluescapeQA.js');
type userData_data = typeof import('./data/userData.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, bluescapeQAPage: bluescapeQAPage, userData_data: userData_data }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
