"use strict";

// -->SelectingImagesToPreview :

const smallImagesPreview = document.querySelector(
  ".product_previews-container--sm"
);

smallImagesPreview.addEventListener("click", function (e) {
  if (e.target.classList.contains("image_preview-sm")) {
    const imageContainer = e.target.closest(".imageContainer--outline");
    if (imageContainer.classList.contains("opened_image-SM--container")) {
      console.log("already opened");
    } else {
      document.querySelector(
        ".image_preview-big"
      ).src = `images/image-product-${imageContainer.id}.jpg`;

      console.log(imageContainer);
      document
        .querySelector(".opened_image-SM--container")
        .classList.remove("opened_image-SM--container");
      document
        .querySelector(".opened_image-SM")
        .classList.remove("opened_image-SM");
      imageContainer.classList.add("opened_image-SM--container");
      imageContainer
        .querySelector(".image_preview-sm")
        .classList.add("opened_image-SM");
    }
  }
});

// -->addingProducts :

const plusBtn = document.querySelector(".plus_product");
const minusBtn = document.querySelector(".minus_product");

plusBtn.addEventListener("click", function (e) {
  const numberExisting = document.querySelector(".product_number");
  numberExisting.textContent++;
});
minusBtn.addEventListener("click", function (e) {
  const numberExisting = document.querySelector(".product_number");
  if (!(numberExisting.textContent == 0)) {
    numberExisting.textContent--;
  }
});

// -->openingCart :

const cartBtn = document.querySelector(".cart-container");

cartBtn.addEventListener("click", function (e) {
  const cartDetails = document.querySelector(".cart_details-container");

  if (cartDetails.classList.contains("hidden")) {
    cartDetails.classList.remove("hidden");
  } else {
    cartDetails.classList.add("hidden");
  }
});

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".cart_profile-container") &&
    !document
      .querySelector(".cart_details-container")
      .classList.contains("hidden")
  ) {
    document.querySelector(".cart_details-container").classList.add("hidden");
  }
});

// -->AddingProductToCart :

const productNumber = document.querySelector(".counter_items-added");

const addToCart = document.querySelector(".add_to-cart--btn");

addToCart.addEventListener("click", function (e) {
  const numberExisting = document.querySelector(".product_number");
  if (numberExisting.textContent != 0) {
    productNumber.textContent =
      Number(numberExisting.textContent) + Number(productNumber.textContent);
    if (
      !document.querySelector(".empty_cart-text").classList.contains("hidden")
    ) {
      document.querySelector(".empty_cart-text").classList.add("hidden");
      document
        .querySelector(".product_added-details")
        .classList.remove("hidden");
      document.querySelector(".checkout_btn").classList.remove("hidden");
    }
    document.querySelector(".number_products-added").textContent =
      productNumber.textContent;
    document.querySelector(".total_price").textContent = `$${
      Number(productNumber.textContent) * 125.0
    }.00`;
    numberExisting.textContent = "0";
  }
});

// -->DeleteCartContent :

const deleteBtn = document.querySelector(".product_delete-btn");

deleteBtn.addEventListener("click", function (e) {
  document.querySelector(".empty_cart-text").classList.remove("hidden");
  document.querySelector(".product_added-details").classList.add("hidden");
  document.querySelector(".checkout_btn").classList.add("hidden");
  productNumber.textContent = "0";
});

// -->OpeningAndClosingModal :

const imageBig = document.querySelector(".image_preview-big");
const modal = document.querySelector(".modal");

imageBig.addEventListener("click", function (e) {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    document.body.style.overflowX = "hidden";
  }
});

document.querySelector(".overlay").addEventListener("click", function (e) {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    document.body.style.overflowX = "visible";
  }
});

// -->changingModalImages :
// -->ByClickingOnSmallImages :

const smallImgsModal = modal.querySelector(".product_previews-container--sm");

smallImgsModal.addEventListener("click", function (e) {
  if (e.target.classList.contains("image_preview-sm")) {
    const imageContainer = e.target.closest(".imageContainer--outline");
    if (imageContainer.classList.contains("opened_image-SM--container")) {
      console.log("already opened");
    } else {
      modal.querySelector(".image_preview-big").src = `images/image-product-${
        Number(imageContainer.id) - 4
      }.jpg`;

      modal
        .querySelector(".opened_image-SM--container")
        .classList.remove("opened_image-SM--container");
      modal
        .querySelector(".opened_image-SM")
        .classList.remove("opened_image-SM");
      imageContainer.classList.add("opened_image-SM--container");
      imageContainer
        .querySelector(".image_preview-sm")
        .classList.add("opened_image-SM");
    }
  }
});

// -->BySlideBTNs:

const previousBtn = document.querySelector(".previous_btn");
const nextBtn = document.querySelector(".next_btn");

previousBtn.addEventListener("click", function (e) {
  const currentImgID =
    Number(modal.querySelector(".opened_image-SM--container").id) - 4;
  let previousID;
  console.log(currentImgID);
  if (currentImgID == 1) {
    previousID = 4;
  } else {
    console.log(currentImgID);
    previousID = currentImgID - 1;
  }
  modal.querySelector(".opened_image-SM").classList.remove("opened_image-SM");
  modal
        .querySelector(".opened_image-SM--container")
        .classList.remove("opened_image-SM--container");

  modal.querySelector(
    ".image_preview-big"
  ).src = `/images/image-product-${previousID}.jpg`;

  document
    .getElementById(`${previousID + 4}`)
    .querySelector(".image_preview-sm")
    .classList.add("opened_image-SM");

    document
    .getElementById(`${previousID + 4}`)
    .classList.add("opened_image-SM--container");
});

nextBtn.addEventListener("click", function (e) {
  const currentImgID =
    Number(modal.querySelector(".opened_image-SM--container").id) - 4;
  let previousID;
  console.log(currentImgID);
  if (currentImgID == 4) {
    previousID = 1;
  } else {
    console.log(currentImgID);
    previousID = currentImgID + 1;
  }
  modal.querySelector(".opened_image-SM").classList.remove("opened_image-SM");
  modal
        .querySelector(".opened_image-SM--container")
        .classList.remove("opened_image-SM--container");

  modal.querySelector(
    ".image_preview-big"
  ).src = `/images/image-product-${previousID}.jpg`;

  document
    .getElementById(`${previousID + 4}`)
    .querySelector(".image_preview-sm")
    .classList.add("opened_image-SM");

    document
    .getElementById(`${previousID + 4}`)
    .classList.add("opened_image-SM--container");

});

//sep////////////////////////////////////////////////////////////////////////////////////////////////////


//sep////////////////////////////////////////////////////////////////////////////////////////////////////
