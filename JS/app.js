const rowPosts = document.querySelector(".row-posts");

fetchData().then((data) => choiseTemplate(data));

class Notification {
  constructor(notif) {
    this.notif = notif;
  }

  notification() {
    return `
        <div class="post background">
          <div class="post__content">
              <div class="post__image">
                 <img src="${this.notif.image}" alt="Image" />
              </div>
              <div class="post__info">
                <div class="post__info-items circle_red">
                  <a href="#" class="post__user-name">${this.notif.userName}</a>
                  <p class="post__action">
                    ${this.notif.action.type}

                    ${
                      this.notif.action.item
                        ? `<a href="#">${this.notif.action.item}</a>`
                        : ""
                    }
                  </p>
                </div>
              <p class="post__time">${this.notif.time}</p>
            </div>
          </div>
        </div>`;
  }
}

class NotificationWithMessage extends Notification {
  notification() {
    return `<div class="post">
             <div class="post__content post__content_direction">
              <div class="post__info post__info_flex">
                <div class="post__image">
                  <img
                    src="${this.notif.image}"
                    alt="Image"
                  />
                </div>
                <div class="post__info-items">
                  <a href="#" class="post__user-name">${this.notif.userName}</a>
                  <p class="post__action">${this.notif.action.type}</p>
                </div>
              </div>
              <p class="post__time post__time_margin">${this.notif.time}</p>
              <p class="post__message">
                ${this.notif.action.item}
              </p>
             </div>
          </div>`;
  }
}

class NotificationWithLikedInfo extends Notification {
  notification() {
    return `
        <div class="post">
            <div class="post__content">
              <div class="post__image">
                <img
                  src="${this.notif.image}"
                  alt="Image"
                />
              </div>
              <div class="post__info post__info_modify">
                <div class="post__info-items">
                  <a href="#" class="post__user-name">${this.notif.userName}</a>
                  <p class="post__action">${this.notif.action.type}</p>
                </div>
                <p class="post__time">${this.notif.time}</p>
              </div>
              <div class="post__liked-info">
                <img src="${this.notif.action.likedInfo}" alt="Image-chess" />
              </div>
            </div>
        </div>
    `;
  }
}

async function fetchData() {
  const response = await fetch("JS/data.json");
  const data = await response.json();
  return data;
}

function createTemplate(instance) {
  const notification = instance.notification();
  addToPage(notification);
}

function addToPage(notification) {
  return rowPosts.insertAdjacentHTML("beforeend", notification);
}

function choiseTemplate(data) {
  data.forEach((notif) => {
    switch (notif.type) {
      case "react":
        createTemplate(new Notification(notif));
        break;

      case "follow":
        createTemplate(new Notification(notif));
        break;

      case "join":
        createTemplate(new Notification(notif));
        break;

      case "private":
        createTemplate(new NotificationWithMessage(notif));
        break;

      case "comment":
        createTemplate(new NotificationWithLikedInfo(notif));
        break;

      case "react":
        createTemplate(new Notification(notif));
        break;

      case "leave":
        createTemplate(new Notification(notif));
        break;

      default:
        break;
    }
  });
}
