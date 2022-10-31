import { atom } from 'nanostores'
import type ace from "ace-builds"
import type { Challenge } from "@/lib/challenges"

export const challenge = atom<Challenge | null>(null)
export const tab = atom("content")
export const editor = atom<ace.Ace.Editor | null>(null)