import { Component } from 'solid-js';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: Component<ServiceProps> = (props) => {
  return (
    <div class="card-glass">
      <div class="text-5xl mb-6">{props.icon}</div>
      <h3 class="text-2xl font-bold mb-3">{props.title}</h3>
      <p class="text-gray-300 mb-6">{props.description}</p>
      <ul class="space-y-2">
        {props.features.map(feature => (
          <li class="text-sm text-gray-400 flex items-start gap-2">
            <span class="text-purple-400 mt-1">→</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
