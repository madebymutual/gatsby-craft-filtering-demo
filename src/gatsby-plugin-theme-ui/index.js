import { toTheme } from "@theme-ui/typography"
import githubTheme from "typography-theme-github"

console.log(toTheme(githubTheme))
export default {
  ...toTheme(githubTheme),
  sizes: {
    container: "60em",
  },
  colors: {
    primary: "#95e8ed",
  },
}
