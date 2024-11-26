import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

document.addEventListener('DOMContentLoaded', function() {
  Fancybox.bind('[data-fancybox]', {
    hideScrollbar: false,
    Images: {
      zoom: false,
    },
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },
    caption: function (fancybox, slide) {
      const legend = slide.triggerEl?.querySelector("legend");
      const caption = legend ? legend.innerHTML : slide.caption || "";
      console.log(caption);
      return  `<div class="font-bold text-xs lg:text-lg -mt-30 lg:-mt-45"><div>${caption}</div>`;
    },
  });
});