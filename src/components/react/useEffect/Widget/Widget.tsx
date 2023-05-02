export function createWidget(color: string, container: HTMLElement) {
  const widget = document.createElement("div");
  widget.style.background = color;
  widget.style.width = "100px";
  widget.style.height = "100px";
  widget.style.borderRadius = "25%";
  widget.style.margin = "10px";
  widget.style.border = "2px solid pink";

  const statusChangeEvent = new CustomEvent("statusChange", {
    detail: { status: "active" },
  });

  setInterval(() => {
    widget.dispatchEvent(statusChangeEvent);
  }, 1000);

  container.appendChild(widget);

  return {
    addEventListener: widget.addEventListener.bind(widget),
    removeEventListener: widget.removeEventListener.bind(widget),
    destroy: () => container.removeChild(widget),
  };
}
