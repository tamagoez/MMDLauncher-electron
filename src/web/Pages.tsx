export const Models = () => {
  function drag(event: any) {
    event.preventDefault();
    window.electron.startDrag("text.txt");
  }
  return (
    <>
      <h1>ใในใ</h1>
      <div draggable="true" id="drag" onDragStart={(e) => drag(e)}>
        Drag me
      </div>
    </>
  );
};
