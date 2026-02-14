
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ProductivityInsight: React.FC = () => {
  const data = [
    { name: 'منجز', value: 40, color: '#FF5C28' },
    { name: 'في الوقت المحدد', value: 35, color: '#EAB308' },
    { name: 'قيد التنفيذ', value: 25, color: '#22C55E' },
  ];

  const metrics = [
    { label: 'المهام المنجزة', value: '+24%', color: 'bg-green-500' },
    { label: 'التسليم في الوقت المحدد', value: '92%', color: 'bg-yellow-500' },
    { label: 'كفاءة الفريق', value: 'ممتاز', color: 'bg-primary' },
  ];

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 h-full flex flex-col shadow-sm transition-colors duration-300">
      <div className="mb-6">
        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 mb-4 transition-transform hover:rotate-12">
          <span className="material-icons">trending_up</span>
        </div>
        <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">رؤى الإنتاجية</h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">ملخص هذا الأسبوع</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] md:min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="85%"
              paddingAngle={5}
              dataKey="value"
              animationBegin={200}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                background: '#111',
                color: '#fff',
                fontSize: '12px',
                padding: '8px 12px'
              }}
              itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">12</span>
          <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">إجمالي المشاريع</span>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded transition-transform group-hover:scale-125 ${m.color}`}></span>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{m.label}</span>
            </div>
            <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductivityInsight;
