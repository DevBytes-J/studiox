import { CheckCircle2 } from 'lucide-react';
import Frame from './Frame';

const sections = [
  {
    title: "Never Miss A High-Value Interaction.",
    description: "Stay on top of important conversations",
    features: [
      "Priority Inbox Filtering",
      "AI-Powered Sorting",
      "Instant Notifications"
    ]
  },
  {
    title: "Know Exactly What's Working And Why.",
    description: "Deep analytics for data-driven decisions",
    features: [
      "Performance Breakdowns",
      "Audience Behavior Insights",
      "Growth Tracking"
    ]
  },
  {
    title: "Direct Messages",
    description: "Manage conversations at scale",
    features: [
      "Unified Inbox",
      "Quick Replies",
      "Smart Filtering"
    ]
  },
  {
    title: "Turn Engagement Into Real Conversations At Scale.",
    description: "Build meaningful relationships with your audience",
    features: [
      "Smart Personalization",
      "Dynamic Metrics",
      "Live Engagement Tracking"
    ]
  }
];

export default function EngagementFeatures() {
  return (
    <Frame>
      <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {sections.map((section, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <div className="w-full h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-gray-800" />
            </div>
            
            <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
              <span className="text-sm text-gray-400 mb-4 block">Engagement Tools</span>
              <h3 className="text-4xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-400 mb-6">{section.description}</p>
              
              <ul className="space-y-3">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Frame>
  );
}
