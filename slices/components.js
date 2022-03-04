import dynamic from "next/dynamic";

export const components = {
  email_signup: dynamic(() => import("./EmailSignup")),
  full_width_image: dynamic(() => import("./FullWidthImage")),
  headline_with_button: dynamic(() => import("./HeadlineWithButton")),
  info_with_image: dynamic(() => import("./InfoWithImage")),
  text_info: dynamic(() => import("./TextInfo")),
};
