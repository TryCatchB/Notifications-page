import {
  Notification,
  NotificationWithLikedInfo,
  NotificationWithMessage,
} from "./classes.js";

const notificationClasses = {
  react: Notification,
  follow: Notification,
  join: Notification,
  leave: Notification,
  private: NotificationWithMessage,
  comment: NotificationWithLikedInfo,
};

export async function fetchData() {
  const response = await fetch("JS/data.json");
  return await response.json();
}

export function choiseTemplate(data) {
  data.forEach((notif, index) => {
    const NotificationClass = notificationClasses[notif.type];
    if (NotificationClass) {
      createTemplate(new NotificationClass(notif, index));
    }
  });
}

function createTemplate(instance) {
  const notification = instance.notification();
  addToPage(notification);
}

function addToPage(notification) {
  const rowPosts = document.querySelector(".row-posts"); // Cache this if used multiple times
  rowPosts.insertAdjacentHTML("beforeend", notification);
}
