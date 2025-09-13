interface TreeProps {
    leafColor?: string;
    trunkWidth?: number;
    trunkColor?: string;
  }
  
  function Tree({ leafColor = '#2ecc71', trunkWidth = 10, trunkColor = '#795548' }: TreeProps) {
    return (
      <svg width="150" height="180" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <rect 
          x={50 - trunkWidth / 2} 
          y="80" 
          width={trunkWidth} 
          height="40" 
          fill={trunkColor} 
          rx="2"
        />
        <circle cx="50" cy="50" r="40" fill={leafColor} />
        <circle cx="30" cy="60" r="25" fill={leafColor} />
        <circle cx="70" cy="60" r="25" fill={leafColor} />
      </svg>
    );
  }
  
  export default Tree;