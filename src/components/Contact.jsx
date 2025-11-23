import React from "react";

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600">Feel free to reach out via email or the form below.</p>

      <form className="mt-6 grid grid-cols-1 gap-4">
        <label className="flex flex-col">
          <span className="text-sm text-slate-600">Name</span>
          <input type="text" name="name" className="mt-1 border rounded px-3 py-2" placeholder="Your name" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-slate-600">Email</span>
          <input type="email" name="email" className="mt-1 border rounded px-3 py-2" placeholder="you@example.com" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-slate-600">Message</span>
          <textarea name="message" rows="5" className="mt-1 border rounded px-3 py-2" placeholder="Hello..." />
        </label>

        <div>
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md">Send Message</button>
        </div>
      </form>
    </div>
  );
}
