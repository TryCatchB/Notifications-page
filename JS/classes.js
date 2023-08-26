export class Notification {
  constructor(notif, positionItem) {
    this.notif = notif;
    this.positionItem = positionItem;
  }

  notification() {
    return `
        <div class="post ${this.positionItem < 3 ? "background" : ""}">
          <div class="post__content">
              <div class="post__image">
                 <img src="${this.notif.image}" alt="Image" />
              </div>
              <div class="post__info">
                <div class="post__info-items ${
                  this.positionItem < 3 ? "circle_red" : ""
                }">
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

export class NotificationWithMessage extends Notification {
  notification() {
    return `<div class="post ${this.positionItem < 3 ? "background" : ""}">
             <div class="post__content post__content_direction">
              <div class="post__info post__info_flex">
                <div class="post__image">
                  <img
                    src="${this.notif.image}"
                    alt="Image"
                  />
                </div>
                <div class="post__info-items ${
                  this.positionItem < 3 ? "circle_red" : ""
                }">
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

export class NotificationWithLikedInfo extends Notification {
  notification() {
    return `
        <div class="post ${this.positionItem < 3 ? "background" : ""}">
            <div class="post__content">
              <div class="post__image">
                <img
                  src="${this.notif.image}"
                  alt="Image"
                />
              </div>
              <div class="post__info post__info_modify ${
                this.positionItem < 3 ? "circle_red" : ""
              }">
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
