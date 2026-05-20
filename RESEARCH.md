# Research Notes — 2026-05-20

## Nous Research / Hermes Agent Architecture

### 5 Pillars
1. **Memory** — user.md + memory.md, persistent across sessions
2. **Skills** — SKILL.md files, procedural memory agent creates and reuses
3. **Soul** — SOUL.md, behavioral consistency
4. **Crons** — scheduled background jobs
5. **Self-Improving Loop** — closed feedback cycle under every session

### Self-Evolution (github.com/NousResearch/hermes-agent-self-evolution)
- Uses DSPy + GEPA (Genetic-Pareto Prompt Evolution)
- Evolves: skills, tool descriptions, system prompts, code
- Reads execution traces to understand WHY things fail
- Works with as few as 3 examples
- Phase 1: Skill files ✅ | Phase 2: Tool descriptions | Phase 3: System prompts

### GEPA (arxiv.org/abs/2507.19457)
- Reflective prompt evolution, accepted ICLR 2026 (Oral)
- Gradient-free optimizer using natural language reflection
- Maintains diverse population of candidate prompts
- Pareto selection prevents local maximum convergence
- Outperforms RL on many tasks

### Harness Engineering
- "Agents aren't hard; the Harness is hard."
- Design boundaries, guardrails, feedback loops
- Constraining solution space paradoxically increases productivity
- Every time agent makes mistake → engineer solution so it can't repeat
- Higher level than prompt engineering — architect the complete system

### Three-Tier Memory
1. User profile (who you are)
2. Agent memory (what I've learned)
3. Session search (FTS5 over past transcripts)

### Key Insight
The learning loop runs on its own. Memory, skills, and session search are all outputs of the same continuous process. Cache-aware architecture doesn't keep growing token bill.
