import TreeNode from "./tree-node";

function isMirror(
  name: string,
  subTree1: TreeNode | null,
  subTree2: TreeNode | null
): boolean {
  console.log(`${name}\nsubTree1: ${subTree1?.val}\nsubTree2: ${subTree2?.val}`);

  if (subTree1 === null && subTree2 === null) {
    return true;
  }

  if (subTree1 === null || subTree2 === null) {
    return false;
  }

  return (
    subTree1.val === subTree2.val &&
    isMirror("left-side", subTree1.left, subTree2.right) &&
    isMirror("right-side", subTree1.right, subTree2.left)
  );
}

function IsSymmetricThree(root: TreeNode | null): boolean {

  if (root === null) {
    return true;
  }

  return isMirror("root", root, root);
}

export default IsSymmetricThree;
