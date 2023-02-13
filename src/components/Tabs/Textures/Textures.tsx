export function Textures() {
  return (
    <div className="tab-panel textures-panel">
      <div>
        <h1>Texture editor</h1>
      </div>
      <div>
        <div className="textures-preview-panel">
          <span className="textures-preview-title">Texture preview</span>
          <img
            src="/tab-icons/mc-block.png"
            alt=""
            className="textures-preview-img"
          />
        </div>
        <div className="textures-preview-panel">
          <span className="textures-preview-title">Default texture</span>
          <img
            src="/tab-icons/mc-block.png"
            alt=""
            className="textures-preview-img"
          />
        </div>
      </div>
    </div>
  );
}
