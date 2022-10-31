import { readdirSync, readFileSync, existsSync } from 'fs'
import Processor from "asciidoctor"

export type Challenge = {
  slug: string
  title: string
  content: string
  todo?: string
  main?: string
  test?: string
  solution?: string
  page: {
    next?: string
    previous?: string
  }
}

const rootDir = "/workspaces/motoko/challenges"
const slugs = readdirSync(rootDir)

export async function getChallenges(): Promise<Challenge[]> {
  return await Promise.all(slugs.map(getChallenge))
}

export async function getChallenge(slug: string): Promise<Challenge> {
  const folder = `${rootDir}/${slug}`
  const processor = Processor()
  const readme = processor.loadFile(`${folder}/readme.adoc`, { safe: 'safe' })

  const slugIndex = slugs.indexOf(slug)

  let todo = undefined
  let main = undefined
  let test = undefined
  let solution = undefined

  if (existsSync(`${folder}/todo.adoc`)) {
    todo = processor.loadFile(`${folder}/todo.adoc`, { safe: 'safe' }).convert()
  }

  if (existsSync(`${folder}/main.mo`)) {
    main = readFileSync(`${folder}/main.mo`, 'utf8').toString()
  }

  if (existsSync(`${folder}/test.mo`)) {
    test = readFileSync(`${folder}/test.mo`, 'utf8').toString()
  }

  if (existsSync(`${folder}/solution.mo`)) {
    solution = readFileSync(`${folder}/solution.mo`, 'utf8').toString()
  }

  return {
    slug,
    title: readme.getTitle() || slug,
    content: readme.convert(),
    todo,
    main,
    test,
    solution,
    page: {
      next: slugs[slugIndex + 1],
      previous: slugs[slugIndex - 1],
    }
  }
}