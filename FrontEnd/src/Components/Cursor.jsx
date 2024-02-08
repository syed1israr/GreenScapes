
import gsap from 'gsap';
function Cursor() {
    document.addEventListener('mousemove', handleMouseMovement);

    let circleX = 0;
    let circleY = 0;

    function updateCirclePosition(x, y) {
      gsap.to('.Minicircle', {
        x: x,
        y: y,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    function handleMouseMovement(event) {
      const x = event.clientX;
      const y = event.clientY;
      const xOffset = -10;
      const yOffset = -10;

      circleX = x + xOffset;
      circleY = y + yOffset;

      updateCirclePosition(circleX, circleY);
    }

    return (
      <div className='Minicircle'>
        
      </div>
    );
  }
export default Cursor;