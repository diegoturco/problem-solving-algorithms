import IsSymmetricThree from ".";
import TreeNode from "./tree-node";

describe("symmetric three", () => {
  it("case 1", () => {
    const rootNode = new TreeNode(1);

    const nodeL2 = new TreeNode(2);
    const nodeR2 = new TreeNode(2);
    
    const nodeL3 = new TreeNode(3);
    const nodeR3 = new TreeNode(3);    

    const nodeL4 = new TreeNode(4);
    const nodeR4 = new TreeNode(4);    

    rootNode.left = nodeL2;
    rootNode.right = nodeR2;

    nodeL2.left = nodeL3;
    nodeL2.right = nodeR4;
  
    nodeR2.left = nodeL4;
    nodeR2.right = nodeR3;
    
    console.log(rootNode);    

    expect(IsSymmetricThree(rootNode)).toEqual(true);
  });

  it("case 2", () => {
    const rootNode = new TreeNode(1);

    const nodeL2 = new TreeNode(2);
    const nodeR2 = new TreeNode(2);
    
    const nodeR3 = new TreeNode(3);    

    const nodeRR4 = new TreeNode(3);    

    rootNode.left = nodeL2;
    rootNode.right = nodeR2;

    nodeL2.right = nodeR3;
  
    nodeR2.right = nodeRR4;
    
    console.log(rootNode);    

    expect(IsSymmetricThree(rootNode)).toEqual(false);
  });
});
