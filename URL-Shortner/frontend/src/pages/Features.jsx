const Features = () => {
  return (
<section className="grid md:grid-cols-3 gap-6 px-8 py-12 border-t border-neutral-800">
        <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
          <h3 className="font-semibold mb-2">⚡ Fast & Reliable</h3>
          <p className="text-neutral-400 text-sm">
            Links that resolve instantly worldwide with enterprise-grade uptime.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
          <h3 className="font-semibold mb-2">🔒 Secure by Default</h3>
          <p className="text-neutral-400 text-sm">
            Spam and malware protection, HTTPS everywhere, and privacy-first.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
          <h3 className="font-semibold mb-2">📊 Actionable Analytics</h3>
          <p className="text-neutral-400 text-sm">
            Track clicks, devices, referrers, and locations to optimize campaigns.
          </p>
        </div>
      </section>
  )
}

export default Features
