import "bootstrap";
import "../styles/index.scss";

import SmoothScroll from "./smooth-scroll.min";
import WOW from "./wow.min";
var Isotope = require("isotope-layout");

import openMenuIcon from "../images/menu.svg";
import logo from "../images/logo.png";
import closeMenuIcon from "../images/close.svg";
import home from "../images/home.png";
import homeMobile from "../images/home-mobile.png";
import call from "../images/call.png";
import idea from "../images/ideas.png";

import app1 from "../images/app1.png";
import app2 from "../images/app2.png";
import app3 from "../images/app3.png";
import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";

import step1_img from "../images/01.png";
import step2_img from "../images/02.png";
import step3_img from "../images/03.png";
import step4_img from "../images/04.png";
import step5_img from "../images/05.png";
import step6_img from "../images/06.png";

import woman_avatar from "../images/woman-avatar.png";
import man_avatar from "../images/man-avatar.png";

import phone_contact from "../images/phone_contact.svg";
import telegram_contact from "../images/telegram_contact.svg";
import whatsapp_contact from "../images/whatsapp_contact.svg";
import email_contact from "../images/email_contact.svg";
import location_contact from "../images/location_contact.svg";
import contact from "../images/contactUs.png";

import t_footer from "../images/telegram_footer.svg";
import w_footer from "../images/whatsapp_footer.svg";
import e_footer from "../images/email_footer.svg";

new WOW.WOW({
  live: false,
}).init();

new SmoothScroll('a[href*="#"]', {
  speed: 2000,
});

const nav = document.getElementById("nav");

const open_menu_icon = document.getElementById("sm-open-menu-icon");
open_menu_icon.src = openMenuIcon;
open_menu_icon.addEventListener("click", function () {
  nav.classList.add("show_nav");
});

const close_menu_icon = document.getElementById("sm-close-menu-icon");
close_menu_icon.src = closeMenuIcon;
close_menu_icon.addEventListener("click", function () {
  nav.classList.remove("show_nav");
});

const logo_img = document.getElementById("logo-img");
logo_img.src = logo;

const menu = document.getElementById("nav-menu");
const menuItems = menu.querySelectorAll("a");
menu.addEventListener("click", (event) => {
  if (!event.target.classList.contains("active")) {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  }
});

window.onscroll = function () {
  fixedTop();
};
window.onload = function () {
  fixedTop();
};
function fixedTop() {
  if (window.scrollY > 70) {
    document.querySelector("#navbar").classList.remove("container");
    document.querySelector("#navbar").classList.add("fixed-top");
    document.querySelector("#main").style.paddingTop = "120px";
  } else {
    document.querySelector("#navbar").classList.remove("fixed-top");
    document.querySelector("#navbar").classList.add("container");
    document.querySelector("#main").style.paddingTop = "60px";
  }
}

//------------------ home

const home_md_img = document.getElementById("team_work_md");
home_md_img.src = home;
const home_sm_img = document.getElementById("team_work_sm");
home_sm_img.src = homeMobile;
const call_icon = document.getElementById("phone_call");
call_icon.src = call;

const phone_contact_box_img = document.getElementById("phone_contact_box");
phone_contact_box_img.src = phone_contact;
const telegram_contact_box_img = document.getElementById(
  "telegram_contact_box"
);
telegram_contact_box_img.src = telegram_contact;
const whatsapp_contact_box_img = document.getElementById(
  "whatsapp_contact_box"
);
whatsapp_contact_box_img.src = whatsapp_contact;
const email_contact_box_img = document.getElementById("email_contact_box");
email_contact_box_img.src = email_contact;

const contact_box = document.querySelector(".contact_box");
const contact_phone = document.querySelector("#contact_phone");
contact_phone.addEventListener("click", function (e) {
  contact_box.classList.toggle("toggle_scale");
});

//------------------services

const accordion = document.querySelector("#accordion");
const acco_childs = [...accordion.children];
accordion.addEventListener("click", function (event) {
  if (event.target.nodeName === "A") {
    acco_childs.forEach((item) => {
      if (item.firstElementChild.classList.contains("show_item"))
        item.firstElementChild.classList.remove("show_item");
    });
    if (!event.target.parentNode.nextElementSibling.classList.contains("show"))
      event.target.parentNode.classList.add("show_item");
    else event.target.parentNode.classList.remove("show_item");
  }
});

const idea_img = document.querySelector("#idea_img");
idea_img.src = idea;

// ---------------------portfolio--------------------------------------------------------

const app1_img = document.querySelector("#app1");
app1_img.src = app1;
const app2_img = document.querySelector("#app2");
app2_img.src = app2;
const app3_img = document.querySelector("#app3");
app3_img.src = app3;
const web1_img = document.querySelector("#web1");
web1_img.src = web1;
const web2_img = document.querySelector("#web2");
web2_img.src = web2;
const card1_img = document.querySelector("#card1");
card1_img.src = card1;
const card2_img = document.querySelector("#card2");
card2_img.src = card2;
const card3_img = document.querySelector("#card3");
card3_img.src = card3;
const card4_img = document.querySelector("#card4");
card4_img.src = card4;

const cards = document.querySelectorAll(".card");
const view_portfolio = document.querySelector("#view_portfolio_modul");
const img_portfolio_modal = view_portfolio.querySelector("img");

cards.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.nodeName === "A") {
      view_portfolio.classList.add("view_portfolio_modal");
      const img = item.querySelector("img");
      img_portfolio_modal.src = img.src;
    }
  });
});
view_portfolio.addEventListener("click", function (e) {
  if (e.target.nodeName !== "IMG") {
    view_portfolio.classList.remove("view_portfolio_modal");
    img_portfolio_modal.src = "";
  }
});

var elem = document.querySelector("#portfolio_container");
var iso = new Isotope(elem, {
  originLeft: false,
  percentPosition: true,
});

const portfolio_filter = document.querySelector("#portfolio-filter");
const filter_li = [...portfolio_filter.querySelectorAll("li")];
portfolio_filter.addEventListener("click", (event) => {
  filter_li.forEach((item) => {
    item.classList.remove("filter-active");
  });
  event.target.classList.add("filter-active");
  iso.arrange({ filter: event.target.dataset.filter });
});

// ---------------------------- Steps -------------------------

const step1 = document.querySelector("#step1");
step1.src = step1_img;
const step2 = document.querySelector("#step2");
step2.src = step2_img;
const step3 = document.querySelector("#step3");
step3.src = step3_img;
const step4 = document.querySelector("#step4");
step4.src = step4_img;
const step5 = document.querySelector("#step5");
step5.src = step5_img;
const step6 = document.querySelector("#step6");
step6.src = step6_img;

//------------------------- about ------------------------------

const a_heydary = document.querySelector("#a-heydary");
a_heydary.src = man_avatar;
const ebrahimy = document.querySelector("#ebrahimy");
ebrahimy.src = man_avatar;
const visy = document.querySelector("#visy");
visy.src = woman_avatar;
const mirzaei = document.querySelector("#mirzaei");
mirzaei.src = woman_avatar;
const abdolahi = document.querySelector("#abdolahi");
abdolahi.src = woman_avatar;
const moradi = document.querySelector("#moradi");
moradi.src = woman_avatar;
const b_heydary = document.querySelector("#b-heydary");
b_heydary.src = woman_avatar;
const seidi = document.querySelector("#seidi");
seidi.src = man_avatar;

//--------------------------- contact ----------------------------

const phone_contact_img = document.querySelector("#phone_contact");
phone_contact_img.src = phone_contact;
const telegram_contact_img = document.querySelector("#telegram_contact");
telegram_contact_img.src = telegram_contact;
const whatsapp_contact_img = document.querySelector("#whatsapp_contact");
whatsapp_contact_img.src = whatsapp_contact;
const email_contact_img = document.querySelector("#email_contact");
email_contact_img.src = email_contact;
const location_contact_img = document.querySelector("#address_contact");
location_contact_img.src = location_contact;
const contact_img = document.querySelector("#contact-img");
contact_img.src = contact;

const telegram_footer_img = document.querySelector("#telegram_footer");
telegram_footer_img.src = t_footer;
const whatsapp_footer_img = document.querySelector("#whatsapp_footer");
whatsapp_footer_img.src = w_footer;
const email_footer_img = document.querySelector("#email_footer");
email_footer_img.src = e_footer;
