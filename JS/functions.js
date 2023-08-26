import {
  Notification,
  NotificationWithLikedInfo,
  NotificationWithMessage,
} from "./classes.js";

export async function fetchData() {
  const response = await fetch("JS/data.json");
  const data = await response.json();
  return data;
}

export function choiseTemplate(data) {
  data.forEach((notif, index) => {
    switch (notif.type) {
      case "react":
        createTemplate(new Notification(notif, index));
        break;

      case "follow":
        createTemplate(new Notification(notif, index));
        break;

      case "join":
        createTemplate(new Notification(notif, index));
        break;

      case "private":
        createTemplate(new NotificationWithMessage(notif, index));
        break;

      case "comment":
        createTemplate(new NotificationWithLikedInfo(notif, index));
        break;

      case "leave":
        createTemplate(new Notification(notif, index));
        break;

      default:
        break;
    }
  });
}

function createTemplate(instance) {
  const notification = instance.notification();
  addToPage(notification);
}

function addToPage(notification) {
  const rowPosts = document.querySelector(".row-posts");

  return rowPosts.insertAdjacentHTML("beforeend", notification);
}
