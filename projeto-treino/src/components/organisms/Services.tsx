import './organisms.css';
import Service from '@/components/molecules/Service.tsx';

function Services() {
  return (
    <div className="services">
      <Service
        title="Front-end"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo debitis deserunt id laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?"
      />
      <Service
        title="Back-end"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo debitis deserunt id laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?"
      />
      <Service
        title="Mobile"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo debitis deserunt id laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?"
      />
    </div>
  );
}

export default Services;
