import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from "qiankun";

export default function startQianKun(apps: []) {
  registerMicroApps(apps, {
    beforeLoad: async () => {
      console.log("beforeLoad");
    },
    afterMount: [
      async app => {
        console.log("afterMount", app);
      }
    ]
  });

  addGlobalUncaughtErrorHandler(e => {
    console.log("error", e);
  });

  start();
}
