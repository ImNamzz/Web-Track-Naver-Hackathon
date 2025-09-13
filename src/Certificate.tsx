import Tree from './Tree';
import './Certificate.css';

interface Task {
  id: number;
  title: string;
}

interface TreeProps {
  leafColor?: string;
  trunkWidth?: number;
}

interface CertificateProps {
  task: Task;
  treeProps: TreeProps;
  forwardedRef: React.Ref<HTMLDivElement>;
}

function Certificate({ task, treeProps, forwardedRef }: CertificateProps) {
  return (
    <div className="certificate-container" ref={forwardedRef}>
      <div className="certificate-header">
        <h2>Tree of Achievement</h2>
      </div>
      <div className="certificate-body">
        <Tree {...treeProps} />
      </div>
      <div className="certificate-footer">
        <p>This tree was grown by completing the task:</p>
        <h3>"{task.title}"</h3>
        <p>on {new Date().toLocaleDateString('en-US')}</p>
      </div>
    </div>
  );
}

export default Certificate;