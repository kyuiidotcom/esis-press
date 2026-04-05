from datetime import datetime

def generate_article():
    title = "Luxury Market Shift in 2026"

    content = f"""
# {title}

## What Happened
Luxury brands are shifting toward object-based identity.

## Context
Art and fashion are merging into symbolic assets.

## Why It Matters
Consumers seek meaning beyond product.

## Market Impact
High-end positioning strengthens.

## ESIS Insight
Luxury is no longer product.
It is identity.
"""

    filename = f"content/articles/{datetime.now().strftime('%Y-%m-%d')}.md"

    with open(filename, "w") as f:
        f.write(content)

    print("Article created:", filename)


if __name__ == "__main__":
    generate_article()
