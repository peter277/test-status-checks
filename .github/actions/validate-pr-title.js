const title = process.env.PR_TITLE;

const regex =
    /^(feat|fix|docs|chore|refactor|test|ci|build|perf)(\([^)]+\))?(!)?: .+/;

if (!title) {
    console.error("No PR title found");
    process.exit(1);
}

if (!regex.test(title)) {
    console.error("❌ PR title does not follow Conventional Commits");
    console.error("Expected: type(scope?): description");
    console.error(`Actual: ${title}`);
    process.exit(1);
}

console.log("✅ PR title is valid");
