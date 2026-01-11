"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type Profile = {
  name: string
  email: string
  avatar?: string
}

const STORAGE_KEY = "__profile"

export default function ProfilePage() {
  const [editing, setEditing] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [profile, setProfile] = React.useState<Profile>({
    name: "Karthik",
    email: "Karthik@karrycinati.in",
    avatar: "/avatar.png",
  })

  const [draft, setDraft] = React.useState<Profile | null>(null)

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setProfile(JSON.parse(raw))
    } catch (e) {
      /* ignore */
    }
  }, [])

  React.useEffect(() => {
    if (editing) setDraft(profile)
  }, [editing, profile])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setDraft((d) => ({ ...(d || profile), avatar: url }))
  }

  async function save() {
    if (!draft) return
    setSaving(true)
    // persist to localStorage for demo purposes
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    setProfile(draft)
    setSaving(false)
    setEditing(false)
  }

  function cancel() {
    setDraft(null)
    setEditing(false)
  }

  return (
    <div className="p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Manage your profile information</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24 rounded-lg">
              <AvatarImage src={editing && draft?.avatar ? draft.avatar : profile.avatar} alt={profile.name} />
              <AvatarFallback className="rounded-lg">{(profile.name || "").split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback>
            </Avatar>
            {editing ? (
              <label className="flex items-center gap-2 text-sm">
                <input type="file" accept="image/*" onChange={onFileChange} />
              </label>
            ) : null}
          </div>

          <div className="md:col-span-2 grid gap-4">
            <div>
              <Label>Name</Label>
              <Input
                value={editing && draft ? draft.name : profile.name}
                onChange={(e) =>
                  setDraft((d) => ({ ...(d || profile), name: e.target.value }))
                }
                disabled={!editing}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                value={editing && draft ? draft.email : profile.email}
                onChange={(e) =>
                  setDraft((d) => ({ ...(d || profile), email: e.target.value }))
                }
                disabled={!editing}
              />
            </div>

            <div className="flex gap-2 pt-2">
              {editing ? (
                <>
                  <Button onClick={save} disabled={saving}>
                    {saving ? "Saving..." : "Save"}
                  </Button>
                  <Button variant="ghost" onClick={cancel}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setEditing(true)}>Edit profile</Button>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
        
        </CardFooter>
      </Card>
    </div>
  )
}
