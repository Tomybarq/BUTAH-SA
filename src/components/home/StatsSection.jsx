import { useEffect, useRef, useState } from "react";
import { Users, Activity, Heart, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: 500, label: "مستفيد", suffix: "+" },
  { icon: Activity, value: 30, label: "برنامج ونشاط", suffix: "+" },
  { icon: Heart, value: 100, label: "متطوع", suffix: "+" },
  { icon: Handshake, value: 20, label: "شريك داعم", suffix: "+" },
];

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ icon: IconComp, value, label, suffix, active }) {
  const count = useCounter(value, 1800, active);
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <IconComp className="w-9 h-9 text-white" />
      </div>
      <div className="text-5xl font-black text-gray-900 mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-500 font-medium text-base">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-green-700 font-bold text-sm bg-green-100 px-4 py-1.5 rounded-full mb-3">
            إنجازاتنا بالأرقام
          </span>
          <h2 className="text-4xl font-black text-gray-900">أثرنا في الأرقام</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}