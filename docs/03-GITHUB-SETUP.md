# GitHub Setup Runbook

## 1. Create Repository

```bash
# Create new private repository
gh repo create usebraintrust/braintrust-marketing \
  --private \
  --description "Braintrust marketing website - usebraintrust.com" \
  --clone

# Or if repo already exists, connect local to remote
git remote add origin git@github.com:usebraintrust/braintrust-marketing.git
```

## 2. Initialize Git

```bash
cd /path/to/vector-hubble

git init
git add .
git commit -m "feat: initial scaffold — 37 routes, design system, components"
git branch -M main
git push -u origin main
```

## 3. Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production (auto-deploys to usebraintrust.com) |
| `staging` | Staging environment for QA |
| `feat/*` | Feature branches |
| `fix/*` | Bug fix branches |
| `content/*` | Content-only changes |

## 4. Branch Protection Rules (main)

```
Settings → Branches → Add rule → main
✅ Require pull request reviews (1 reviewer)
✅ Require status checks to pass (Vercel preview)
✅ Require branches to be up to date
✅ Require conversation resolution
✅ Restrict pushes (limit to release managers)
❌ Allow force pushes
❌ Allow deletions
```

## 5. Pull Request Template

Create `.github/pull_request_template.md`:

```markdown
## What Changed
<!-- Describe your changes -->

## Screenshots
<!-- Before/After screenshots if applicable -->

## Checklist
- [ ] Mobile responsive
- [ ] Unique meta title & description
- [ ] Single H1 per page
- [ ] Schema markup (if applicable)
- [ ] Internal links added
- [ ] No console errors
- [ ] Vercel preview reviewed
```

## 6. Contributor Workflow

```bash
# 1. Create feature branch from main
git checkout -b feat/add-case-studies

# 2. Make changes and commit
git add .
git commit -m "feat: add case studies page with Article schema"

# 3. Push and create PR
git push -u origin feat/add-case-studies
gh pr create --title "Add case studies page" --body "..."

# 4. Review on Vercel preview → Merge → Auto-deploy
```

## 7. Labels

| Label | Description |
|-------|-------------|
| `content` | Content updates only |
| `design` | Visual/CSS changes |
| `feature` | New functionality |
| `seo` | SEO improvements |
| `integration` | Third-party integration |
| `bug` | Bug fix |
