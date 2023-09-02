import TreeNode from "./tree-node";

function isMirror(
  name: string,
  st1: TreeNode | null,
  st2: TreeNode | null
): boolean {
  console.log(`${name}\nst1: ${st1?.val}\nst2: ${st2?.val}`);

  if (st1 === null && st2 === null) {
    return true;
  }

  if (st1 === null || st2 === null) {
    return false;
  }

  return (
    st1.val === st2.val &&
    isMirror("left-side", st1.left, st2.right) &&
    isMirror("right-side", st1.right, st2.left)
  );
}

function IsSymmetricThree(root: TreeNode | null): boolean {
  return isMirror("root", root, root);
}

export default IsSymmetricThree;
