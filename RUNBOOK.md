CI/CD & Tools
Symptom: Job 1 (test) shows red in Actions
Causes:
  - A unit test is failing
  - Lint errors in the code
  - npm ci fails (package-lock.json out of sync)
Fix:
  1. Click the failed job → expand the failed step → read the error
  2. Reproduce locally: npm test or npm run lint
  3. Fix the code, git push — pipeline retries automatically
  4. If npm ci fails: delete node_modules, run npm install,
     commit the new package-lock.json
