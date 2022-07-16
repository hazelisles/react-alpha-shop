import './app.css';

const ProgressControl = () => {
  return (
    <section className="button-group">
      <button className="prev" disabled>
        上一步
      </button>
      <button className="next">下一步</button>
      <button className="next" disabled>
        確認下單
      </button>
    </section>
  );
};
export default ProgressControl;
