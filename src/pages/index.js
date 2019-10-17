/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import { graphql } from "gatsby"

import { AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import Post from "../components/post"

export default ({ data }) => {
  const { categories, allPosts } = data.craft

  const [posts, setPosts] = useState(allPosts)
  const [selected, setSelected] = useState("all")

  const filterPosts = event => {
    const value = event.target.value
    let posts = allPosts

    if (value !== "all") {
      posts = allPosts.filter(post =>
        post.newsCategory.find(category => category.slug === value)
      )
    }

    setSelected(value)
    setPosts(posts)
  }

  return (
    <Layout>
      <h2>Filter by category -</h2>
      <select onChange={filterPosts} value={selected}>
        <option value="all">All</option>
        {categories.map(category => (
          <option key={category.id} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>

      <h2>Posts</h2>
      <div
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["auto", "repeat(3, 1fr)"],
        }}
      >
        <AnimatePresence>
          {posts.map(post => (
            <Post key={post.id} title={post.title} />
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    craft {
      categories: categories(group: "newsCategories") {
        ... on craft_newsCategories_Category {
          id
          title
          slug
        }
      }
      allPosts: entries(section: "news") {
        ... on craft_news_news_Entry {
          id
          title
          newsCategory {
            slug
          }
        }
      }
    }
  }
`
