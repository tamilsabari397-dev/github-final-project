import { Heart, Leaf, Sparkles } from 'lucide-react'

const commitments = [
  {
    icon: Leaf,
    title: 'Plants with a good start',
    text: 'We choose healthy, well-rooted plants and pack each one with care for its trip to your home.',
  },
  {
    icon: Sparkles,
    title: 'A little more everyday calm',
    text: 'Indoor plants bring natural texture, a sense of care, and a softer rhythm to the rooms we live in.',
  },
  {
    icon: Heart,
    title: 'Here after delivery',
    text: 'Thoughtful guidance and responsive support help you feel confident as your plant settles in.',
  },
]

export default function AboutUs() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <p className="eyebrow">Rooted in thoughtful growing</p>
        <h2 id="about-title">A greener home, at your own pace.</h2>
        <p>Paradise Nursery is a small plant shop with a considered collection of indoor plants, chosen to help make your home feel more alive.</p>
      </div>
      <div className="about-story">
        <div>
          <span className="story-label">Our mission</span>
          <p>Make the joy of bringing plants home feel simple, welcoming, and lasting.</p>
        </div>
        <div>
          <span className="story-label">Our vision</span>
          <p>More homes with a little life in every corner, and more people who feel good caring for it.</p>
        </div>
      </div>
      <div className="commitment-grid">
        {commitments.map(({ icon: Icon, title, text }) => (
          <article className="commitment" key={title}>
            <span className="commitment-icon"><Icon size={20} strokeWidth={1.8} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}