# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""modify nullable value of column answered from True to False

Revision ID: b08773b08a43
Revises: 1640eb654c59
Create Date: 2021-06-23 09:03:14.910747+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'b08773b08a43'
down_revision = '1640eb654c59'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('questions', 'answered',
                    existing_type=sa.BOOLEAN(),
                    nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('questions', 'answered',
                    existing_type=sa.BOOLEAN(),
                    nullable=True)
    # ### end Alembic commands ###
