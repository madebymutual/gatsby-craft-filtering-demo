import { toTheme } from "@theme-ui/typography"
import githubTheme from "typography-theme-github"

export default {
  ...toTheme(githubTheme),
  sizes: {
    container: "60em",
  },
  colors: {
    primary: "#95e8ed",
  },
}
