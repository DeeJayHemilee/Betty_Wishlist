
    /* =========================================================
       EASY-TO-EDIT SETTINGS
       Change these whenever you have the real details.
    ========================================================= */

    const CART_EMAIL = "milycute2@gmail.com";
    const NOTE_EMAIL = "milycute2@gmail.com";

    const BANK_NAME = "Providus Bank";
    const ACCOUNT_NAME = "Elizabeth Emiola";
    const ACCOUNT_NUMBER = "6510235536";

document.querySelectorAll(".section, .surprise-section, footer").forEach(function(section) {

  const tag = document.createElement("div");

  tag.className = "section-acct-tag";
  tag.textContent = "Acct: " + ACCOUNT_NUMBER;

  section.appendChild(tag);

});

    /* =========================================================
       ITEM CATALOG
       One place holding every item on the site, whether it
       shows up in the wishlist grid, the vanity, the dream
       room, or the budget suggestions.
    ========================================================= */

    const catalog = {

      "satin-dress": {
        icon: "👗",
        name: "Satin Midi Dress",
        description: "Purple or jewel tone, easy to dress up or down.",
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80"
      },
      "statement-heels": {
        icon: "👠",
        name: "Statement Heels",
        description: "Something elegant for a night out.",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
      },
      "handbag": {
        icon: "👜",
        name: "Cute Handbag",
        description: "Structured mini bag, purple or neutral.",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
      },
      "wig": {
        icon: "💁🏽‍♀️",
        name: "Luxury Wig",
        description: "A fresh install for a fresh era.",
        img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=500&q=80"
      },

      "perfume": {
        icon: "🌸",
        name: "Signature Perfume",
        description: "Her current perfume obsession.",
        img: "Images/Perfume.jpg"
      },
      "makeup-set": {
        icon: "💄",
        name: "Makeup Set",
        description: "Lip gloss, blush and highlighter.",
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
      },
      "selfcare-box": {
        icon: "🧴",
        name: "Self-Care Box",
        description: "Body care and skincare goodies.",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
      },
      "spa-session": {
        icon: "💆🏽‍♀️",
        name: "Spa Session",
        description: "Massage, facial and relaxation.",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      },
      "jewellery": {
        icon: "💎",
        name: "Jewellery Set",
        description: "Gold or elegant statement pieces.",
        img: "Images/jewel set.jpg"
      },

      "headphones": {
        icon: "🎧",
        name: "Wireless Headphones",
        description: "Stylish headphones in her favourite colour.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
      },
      "smartwatch": {
        icon: "⌚",
        name: "Smart Watch",
        description: "Something sleek and stylish.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
      },
      "instant-camera": {
        icon: "📸",
        name: "Instant Camera",
        description: "For all her everyday memories.",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
      },
      "smartphone": {
        icon: "📱",
         name: "Latest Smartphone",
      description: "A sleek upgrade she'll love",
      image: "Images/Phone.jpg"
      },

      "couch": {
        icon: "🛋️",
        name: "Single Couch",
        description: "A cosy statement seat for her room.",
        img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=500&q=80"
      },
      "lamp": {
        icon: "💡",
        name: "Statement Lamp",
        description: "Warm light for her room.",
        img: "Images/Statement Lamp.jpg"
      },
      "mirror": {
        icon: "🪞",
        name: "Full-Length Mirror",
        description: "Because outfit checks are serious.",
        img: "Images/Full length Mirror.jpg"
      },
      "candles": {
        icon: "🕯️",
        name: "Scented Candle Set",
        description: "Pretty scents for pretty spaces.",
        img: "Images/Scented Candles.webp"
      },

      "cake": {
        icon: "🍰",
        name: "Birthday Cake",
        description: "Her favourite flavour.",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
      },
      "dinner-date": {
        icon: "🍝",
        name: "Dinner Date",
        description: "Her favourite restaurant.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80"
      },
      "dessert-box": {
        icon: "🧁",
        name: "Dessert Box",
        description: "A box of sweet things she will love.",
        img: "Images/Desert Platter.jpg"
      },
      "brunch-date": {
        icon: "🍝",
        name: "Food Platter",
        description: "Good food on a special day",
        img: "Images/Food Platter.jpg"
      },

      "girls-night": {
        icon: "🥂",
        name: "Girls' Night Out",
        description: "Dinner, music, pictures and good energy.",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80"
      },
      "spa-day": {
        icon: "💆🏽‍♀️",
        name: "Spa Day",
        description: "A full day of being pampered.",
        img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80"
      },
      "concert-ticket": {
        icon: "🎶",
        name: "Concert Ticket",
        description: "For her favourite artist or event.",
        img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=500&q=80"
      },
      "photoshoot": {
        icon: "📸",
        name: "Birthday Photoshoot",
        description: "Styling, makeup and photography.",
        img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=500&q=80"
      },

      "weekend-getaway": {
        icon: "✈️",
        name: "Weekend Getaway",
        description: "A short trip somewhere beautiful.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
      },
      "travel-bag": {
        icon: "🧳",
        name: "Travel Bag",
        description: "A stylish carry-on.",
        img: "Images/travel bag.webp"
      },
      "travel-sunglasses": {
        icon: "🕶️",
        name: "Travel Sunglasses",
        description: "Main-character airport energy.",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
      },
      "travel-camera": {
        icon: "📷",
        name: "Travel Camera",
        description: "For the next adventure.",
        img: "Images/Travel camera.jpg"
      }

    };


    const categoryItems = {

      wardrobe: ["satin-dress", "statement-heels", "handbag", "wig"],
      beauty: ["perfume", "makeup-set", "selfcare-box", "spa-session", "jewellery"],
      gadgets: ["headphones", "smartwatch", "instant-camera", "smartphone"],
      home: ["couch", "lamp", "mirror", "candles",],
      food: ["cake", "dinner-date", "dessert-box", "brunch-date"],
      experiences: ["girls-night", "spa-day", "concert-ticket", "photoshoot"],
      travel: ["weekend-getaway", "travel-bag", "travel-sunglasses", "travel-camera"]

    };


    /* =========================================================
       IMAGE FALLBACK
       If a photo link ever breaks, this quietly hides the
       broken image and lets the soft gradient behind it show
       instead, so nothing ever looks broken.
    ========================================================= */

    document.addEventListener(
      "error",
      function(event) {

        if (event.target.tagName === "IMG") {
          event.target.style.display = "none";
        }

      },
      true
    );


    /* =========================================================
       DISPLAY WISHLIST
    ========================================================= */

    function showCategory(category) {

      const container =
        document.getElementById("wishlistItems");

      const ids =
        categoryItems[category] || [];

      container.innerHTML = ids
        .map((id) => {

          const item = catalog[id];

          return `

            <article class="wishlist-item">

              <div class="item-image">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
              </div>

              <h4>
                ${item.name}
              </h4>

              <p>
                ${item.description}
              </p>

              <div class="item-bottom">

                <button
                  class="view-item"
                  onclick="openModal('${id}')"
                >
                  View & Gift 💜
                </button>

              </div>

            </article>

          `;

        })
        .join("");

      document
        .getElementById("wishlistItems")
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    }


    showCategory("wardrobe");


    /* =========================================================
       MODAL
    ========================================================= */

    let currentModalItem = null;


    function openModal(id) {

      const item = catalog[id];

      if (!item) {
        return;
      }

      currentModalItem = id;

      document
        .getElementById("modalTitle")
        .textContent = item.name;

      document
        .getElementById("modalDescription")
        .textContent = item.description;

      const modalImage =
        document.getElementById("modalImage");

      modalImage.style.display = "block";
      modalImage.src = item.img;
      modalImage.alt = item.name;

      document
        .getElementById("modal")
        .classList.add("active");

      document.body.classList.add("modal-open");

    }


    function closeModal() {

      document
        .getElementById("modal")
        .classList.remove("active");

      document.body.classList.remove("modal-open");

    }


    function giftThis() {

      if (currentModalItem) {
        addToCart(currentModalItem);
      }

      closeModal();

    }


    document
      .getElementById("modal")
      .addEventListener(
        "click",
        function(event) {

          if (
            event.target.id === "modal"
          ) {

            closeModal();

          }

        }
      );


    /* =========================================================
       WISHING CART
    ========================================================= */

    let cart =
      JSON.parse(
        localStorage.getItem("wishingCart") || "[]"
      );


    function saveCart() {

      localStorage.setItem(
        "wishingCart",
        JSON.stringify(cart)
      );

    }


    function addToCart(id) {

      if (!catalog[id]) {
        return;
      }

      if (cart.includes(id)) {

        showToast(
          "Already in her wishing cart 💜"
        );

        return;

      }

      cart.push(id);

      saveCart();

      renderCart();

      showToast(
        "You just made the birthday girl smile. 💜"
      );

    }


    function removeFromCart(id) {

      cart = cart.filter(
        (itemId) => itemId !== id
      );

      saveCart();

      renderCart();

    }


    function renderCart() {

      const list =
        document.getElementById("cartItemsList");

      const count =
        document.getElementById("cartCount");

      count.textContent = cart.length;

      if (!cart.length) {

        list.innerHTML = `

          <div class="cart-empty">
            Her cart is empty right now.
            Go pick something she will love. 💜
          </div>

        `;

        return;

      }

      list.innerHTML = cart
        .map((id) => {

          const item = catalog[id];

          if (!item) {
            return "";
          }

          return `

            <div class="cart-item">

              <div class="cart-item-image">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
              </div>

              <span class="cart-item-name">
                ${item.name}
              </span>

              <button
                class="cart-item-remove"
                onclick="removeFromCart('${id}')"
                aria-label="Remove ${item.name}"
              >
                ×
              </button>

            </div>

          `;

        })
        .join("");

    }


    function toggleCart() {

      document
        .getElementById("cartDrawer")
        .classList.toggle("active");

      document
        .getElementById("cartOverlay")
        .classList.toggle("active");

      document.body.classList.toggle("cart-open");

    }


    function buildCartMailParts() {

      const senderName =
        document.getElementById("cartSenderName").value
          || "A well-wisher";

      const itemLines =
        cart
          .map((id) => "- " + catalog[id].name)
          .join("\n");

      const plainSubject =
        "Birthday Wishlist Picks for Betty";

      const plainBody =
        "Hi!\n\n" +
        senderName +
        " picked these for Betty's birthday:\n\n" +
        itemLines +
        "\n\nWith love. 💜";

      return {
        subject: plainSubject,
        body: plainBody
      };

    }


    function processWishlist() {

      if (!cart.length) {

        showToast(
          "Add something to her cart first 💜"
        );

        return;

      }

      const parts = buildCartMailParts();

      window.location.href =
        "mailto:" + CART_EMAIL +
        "?subject=" + encodeURIComponent(parts.subject) +
        "&body=" + encodeURIComponent(parts.body);

      showToast(
        "Opening your email app to send her picks 💌"
      );

    }


    function openCartGmail() {

      if (!cart.length) {

        showToast(
          "Add something to her cart first 💜"
        );

        return;

      }

      const parts = buildCartMailParts();

      const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(CART_EMAIL) +
        "&su=" + encodeURIComponent(parts.subject) +
        "&body=" + encodeURIComponent(parts.body);

      window.open(gmailUrl, "_blank");

      showToast(
        "Opening Gmail to send her picks 💌"
      );

    }


    renderCart();


    /* =========================================================
       ACCOUNT NUMBER COPY
    ========================================================= */

    document.getElementById("bankName").textContent = BANK_NAME;
    document.getElementById("accountName").textContent = ACCOUNT_NAME;
    document.getElementById("accountNumber").textContent = ACCOUNT_NUMBER;

    document.getElementById("cartAccountText").textContent =
      BANK_NAME + " · " + ACCOUNT_NAME + " · " + ACCOUNT_NUMBER;


    function copyAccountNumber() {

      const finish = () => {

        showToast(
          "Account number copied 💜"
        );

      };

      if (navigator.clipboard) {

        navigator.clipboard
          .writeText(ACCOUNT_NUMBER)
          .then(finish)
          .catch(finish);

      } else {

        finish();

      }

    }


    /* =========================================================
       SURPRISE GENERATOR
    ========================================================= */

    const missions = [

      "Buy her favourite perfume. 🌸",

      "Take her out for brunch. 🥂",

      "She deserves that handbag. 👜",

      "Book her a spa day. 💆🏽‍♀️",

      "Send her money",

      "Upgrade her room. 🏠",

      "Buy her something purple. 💜",

      "Plan a surprise girls' night. ✨",

      "Follow her business pages ✨",

      "Take her shopping. 👗",

      "Plan a cute dinner date. 🍝",

      "Refer Beet Noble Homes 💜",

      "Give her a weekend getaway. ✈️"

    ];


    function surpriseMe() {

      const wheel =
        document.getElementById(
          "surpriseWheel"
        );

      const inner =
        document.getElementById(
          "surpriseInner"
        );

      const mission =
        document.getElementById(
          "mission"
        );

      const rotation =
        (Math.floor(
          Math.random() * 5
        ) + 5) * 360
        +
        Math.floor(
          Math.random() * 360
        );

      wheel.style.transform =
        `rotate(${rotation}deg)`;

      inner.innerHTML =
        "🎁";

      setTimeout(() => {

        const randomMission =
          missions[
            Math.floor(
              Math.random() *
              missions.length
            )
          ];

        mission.textContent =
          randomMission;

        inner.innerHTML =
          "YOUR<br>MISSION";

      }, 900);

    }


    /* =========================================================
       BUDGET SUGGESTION TIERS
    ========================================================= */

    const budgetTiers = [

      {
        min: 5000,
        max: 10000,
        items: [
          { id: "perfume" }
        ]
      },
      {
        min: 10001,
        max: 30000,
        items: [
          { id: "makeup-set" },
          { id: "selfcare-box" }
        ]
      },
      {
        min: 30001,
        max: 60000,
        items: [
          { id: "satin-dress" },
          { id: "statement-heels" },
          { id: "handbag" },
          { id: "wig" }
        ]
      },
      {
        min: 60001,
        max: 150000,
        items: [
          { id: "headphones" },
          { id: "smartwatch" },
          { id: "instant-camera" }
        ]
      },
      {
        min: 150001,
        max: 400000,
        items: [
          { id: "spa-day" },
          { id: "photoshoot" },
          { id: "concert-ticket" },
          { id: "dinner-date" }
        ]
      },
      {
        min: 400001,
        max: 1000000,
        items: [
          { icon: "🏠", name: "Home Refresh Package (couch + lamp + mirror + candles)" },
          { icon: "👗", name: "Designer Wardrobe Upgrade" },
          { icon: "📸", name: "Professional Photoshoot + Styling Day" },
          { icon: "✈️", name: "Domestic Weekend Getaway" }
        ]
      },
      {
        min: 1000001,
        max: 3000000,
        items: [
          { icon: "🌍", name: "International Weekend Getaway" },
          { icon: "🛍️", name: "Luxury Shopping Spree" },
          { icon: "📱", name: "Premium Tech Bundle" },
          { icon: "💜", name: "Support Her Business Directly" }
        ]
      }

    ];


    const budgetRange =
      document.getElementById(
        "budgetRange"
      );

    const amount =
      document.getElementById(
        "amount"
      );

    const suggestions =
      document.getElementById(
        "suggestions"
      );


    function formatMoney(value) {

      return "₦" +
        Number(value)
          .toLocaleString("en-NG");

    }


    function updateBudget() {

      const selectedBudget =
        Number(
          budgetRange.value
        );

      amount.textContent =
        formatMoney(
          selectedBudget
        );

      const tier =
        budgetTiers.find(
          (t) =>
            selectedBudget >= t.min &&
            selectedBudget <= t.max
        ) || budgetTiers[budgetTiers.length - 1];

      suggestions.innerHTML =
        tier.items
          .map((entry) => {

            const item =
              entry.id ? catalog[entry.id] : null;

            const icon =
              item ? item.icon : entry.icon;

            const name =
              item ? item.name : entry.name;

            const clickable =
              entry.id
                ? `onclick="openModal('${entry.id}')" style="cursor:pointer;"`
                : "";

            return `

              <div class="suggestion" ${clickable}>

                <span class="suggestion-icon">
                  ${icon}
                </span>

                <strong>
                  ${name}
                </strong>

              </div>

            `;

          })
          .join("");

    }


    budgetRange.addEventListener(
      "input",
      updateBudget
    );

    updateBudget();


    /* =========================================================
       BIRTHDAY NOTE (MAILS DIRECTLY, NO WALL)
    ========================================================= */

    const messageForm =
      document.getElementById(
        "messageForm"
      );


    function buildNoteMailParts() {

      const sender =
        document.getElementById("sender").value;

      const message =
        document.getElementById("messageText").value;

      return {
        subject: "A Birthday Note for Betty from " + sender,
        body: message + "\n\n— " + sender,
        sender: sender,
        message: message
      };

    }


    messageForm.addEventListener(
      "submit",
      function(event) {

        event.preventDefault();

        const parts = buildNoteMailParts();

        window.location.href =
          "mailto:" + NOTE_EMAIL +
          "?subject=" + encodeURIComponent(parts.subject) +
          "&body=" + encodeURIComponent(parts.body);

        messageForm.reset();

        showToast(
          "Opening your email app to send your note 💌"
        );

      }
    );


    function openNoteGmail() {

      const parts = buildNoteMailParts();

      if (!parts.sender.trim() || !parts.message.trim()) {

        document.getElementById("messageForm").reportValidity();

        return;

      }

      const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(NOTE_EMAIL) +
        "&su=" + encodeURIComponent(parts.subject) +
        "&body=" + encodeURIComponent(parts.body);

      window.open(gmailUrl, "_blank");

      messageForm.reset();

      showToast(
        "Opening Gmail to send your note 💌"
      );

    }


    /* =========================================================
       TOAST
    ========================================================= */

    let toastTimer;


    function showToast(message) {

      const toast =
        document.getElementById(
          "toast"
        );


      toast.textContent =
        message;


      toast.classList.add(
        "show"
      );


      clearTimeout(
        toastTimer
      );


      toastTimer =
        setTimeout(
          () => {

            toast.classList.remove(
              "show"
            );

          },
          2800
        );

    }


    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    const navbar =
      document.getElementById(
        "navbar"
      );

    const mobileMenu =
      document.getElementById(
        "mobileMenu"
      );


    mobileMenu.addEventListener(
      "click",
      function() {

        navbar.classList.toggle(
          "open"
        );

      }
    );


    document
      .querySelectorAll(
        ".nav-links a"
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          function() {

            navbar.classList.remove(
              "open"
            );

          }
        );

      });


    /* =========================================================
       SCROLL HELPER
    ========================================================= */

    function scrollToSection(id) {

      document
        .getElementById(id)
        .scrollIntoView({
          behavior: "smooth"
        });

    }


    /* =========================================================
       BIRTHDAY CAKE
    ========================================================= */

    function makeWish() {

      showToast(
        "🎂 Wish made! May it come true. 💜"
      );

    }


    /* =========================================================
       ESCAPE KEY FOR MODAL AND CART
    ========================================================= */

    document.addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Escape"
        ) {

          closeModal();

          const drawer =
            document.getElementById("cartDrawer");

          if (drawer.classList.contains("active")) {
            toggleCart();
          }

        }

      }
    );


    /* =========================
      HERO SLIDESHOW
    ========================= */

    const heroSlides = document.querySelectorAll(".hero-slide");

    let currentHeroSlide = 0;


    function showHeroSlide(index) {

        heroSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

    }


    if (heroSlides.length > 1) {

        setInterval(() => {

            currentHeroSlide++;

            if (currentHeroSlide >= heroSlides.length) {
                currentHeroSlide = 0;
            }

            showHeroSlide(currentHeroSlide);

        }, 5000);

    }
